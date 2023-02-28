import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { UserStatusModule } from './user-status/user-status.module';
import { UserTypeModule } from './user-type/user-type.module';
import { UserModule } from './user/user.module';
import { LicenseModule } from './license/license.module';
import { UserLicenseModule } from './user-license/user-license.module';
import { CompanyModule } from './company/company.module';
import { ProfileModule } from './profile/profile.module';
import { ModuleProfileModule } from './module-profile/module-profile.module';
import { UserCompanyProfileModule } from './user-company-profile/user-company-profile.module';

@Module({
  imports: [
    ModuleModule,
    UserStatusModule,
    UserTypeModule,
    UserModule,
    LicenseModule,
    UserLicenseModule,
    CompanyModule,
    ProfileModule,
    ModuleProfileModule,
    UserCompanyProfileModule,
  ],
})
export class AuthorizationModule {}

