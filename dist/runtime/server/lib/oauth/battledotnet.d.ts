import type { OAuthConfig } from '#auth-utils';
export interface OAuthBattledotnetConfig {
    /**
     * Battle.net OAuth Client ID
     * @default process.env.NUXT_OAUTH_BATTLEDOTNET_CLIENT_ID
     */
    clientId?: string;
    /**
     * Battle.net OAuth Client Secret
     * @default process.env.NUXT_OAUTH_BATTLEDOTNET_CLIENT_SECRET
     */
    clientSecret?: string;
    /**
     * Battle.net OAuth Scope
     * @default []
     * @see https://develop.battle.net/documentation/guides/using-oauth
     * @example ['openid', 'wow.profile', 'sc2.profile', 'd3.profile']
     */
    scope?: string[];
    /**
     * Battle.net OAuth Region
     * @default EU
     * @see https://develop.battle.net/documentation/guides/using-oauth
     * @example EU (possible values: US, EU, APAC)
     */
    region?: string;
    /**
     * Battle.net OAuth Authorization URL
     * @default 'https://oauth.battle.net/authorize'
     */
    authorizationURL?: string;
    /**
     * Battle.net OAuth Token URL
     * @default 'https://oauth.battle.net/token'
     */
    tokenURL?: string;
}
export declare function battledotnetEventHandler({ config, onSuccess, onError }: OAuthConfig<OAuthBattledotnetConfig>): import("h3").EventHandler<import("h3").EventHandlerRequest, Promise<any>>;
