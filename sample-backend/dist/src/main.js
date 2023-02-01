"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const morgan = require("morgan");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: ['http://localhots:4200'],
    };
    app.enableCors(corsOptions);
    app.use((req, res, next) => {
        console.log('FIRST MIDDLEWARE FROM main.ts');
        next();
    });
    app.use(morgan('dev'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(3005);
}
bootstrap();
//# sourceMappingURL=main.js.map