import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        // 约定：前端必须在请求头的Authorization 字段里放入暗号
        const authHeader = request.headers['authorization'];
        // 和前端密码保持一致
        if (authHeader && authHeader === 'Bearer root') {
            return true; // 认证成功，允许访问
        }
        // 认证失败，拒绝访问，返回401报错 
        throw new UnauthorizedException('身份验证失败：你不是站长，无权操作！'); 
    }
}