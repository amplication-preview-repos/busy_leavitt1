import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DetectionResultController } from "../detectionResult.controller";
import { DetectionResultService } from "../detectionResult.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  anomalyScore: 42.42,
  createdAt: new Date(),
  detectionTime: new Date(),
  id: "exampleId",
  isAnomalous: "true",
  recordId: "exampleRecordId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  anomalyScore: 42.42,
  createdAt: new Date(),
  detectionTime: new Date(),
  id: "exampleId",
  isAnomalous: "true",
  recordId: "exampleRecordId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    anomalyScore: 42.42,
    createdAt: new Date(),
    detectionTime: new Date(),
    id: "exampleId",
    isAnomalous: "true",
    recordId: "exampleRecordId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  anomalyScore: 42.42,
  createdAt: new Date(),
  detectionTime: new Date(),
  id: "exampleId",
  isAnomalous: "true",
  recordId: "exampleRecordId",
  updatedAt: new Date(),
};

const service = {
  createDetectionResult() {
    return CREATE_RESULT;
  },
  detectionResults: () => FIND_MANY_RESULT,
  detectionResult: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DetectionResult", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DetectionResultService,
          useValue: service,
        },
      ],
      controllers: [DetectionResultController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /detectionResults", async () => {
    await request(app.getHttpServer())
      .post("/detectionResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        detectionTime: CREATE_RESULT.detectionTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /detectionResults", async () => {
    await request(app.getHttpServer())
      .get("/detectionResults")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          detectionTime: FIND_MANY_RESULT[0].detectionTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /detectionResults/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/detectionResults"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /detectionResults/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/detectionResults"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        detectionTime: FIND_ONE_RESULT.detectionTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /detectionResults existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/detectionResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        detectionTime: CREATE_RESULT.detectionTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/detectionResults")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
