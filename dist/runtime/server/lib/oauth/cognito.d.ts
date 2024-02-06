import type { OAuthConfig } from '#auth-utils';
export interface OAuthCognitoConfig {
    /**
     * AWS Cognito App Client ID
     * @default process.env.NUXT_OAUTH_COGNITO_CLIENT_ID
     */
    clientId?: string;
    /**
     * AWS Cognito App Client Secret
     * @default process.env.NUXT_OAUTH_COGNITO_CLIENT_SECRET
     */
    clientSecret?: string;
    /**
     * AWS Cognito User Pool ID
     * @default process.env.NUXT_OAUTH_COGNITO_USER_POOL_ID
     */
    userPoolId?: string;
    /**
     * AWS Cognito Region
     * @default process.env.NUXT_OAUTH_COGNITO_REGION
     */
    region?: string;
    /**
     * AWS Cognito Scope
     * @default []
     */
    scope?: string[];
}
export declare function cognitoEventHandler({ config, onSuccess, onError }: OAuthConfig<OAuthCognitoConfig>): import("h3").EventHandler<import("h3").EventHandlerRequest, Promise<any>>;
