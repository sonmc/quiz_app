import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/configuration/configuration';
import { configurationValidate } from 'src/configuration/configuration.validate';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: configurationValidate,
      validationOptions: {
        abortEarly: true,
      },
    }),
  ],
})
export class ConfigurationModule {}
