import type { OAuthConfig } from '#auth-utils';
export interface OAuthDiscordConfig {
    /**
     * Discord OAuth Client ID
     * @default process.env.NUXT_OAUTH_DISCORD_CLIENT_ID
     */
    clientId?: string;
    /**
     * Discord OAuth Client Secret
     * @default process.env.NUXT_OAUTH_DISCORD_CLIENT_SECRET
     */
    clientSecret?: string;
    /**
     * Discord OAuth Scope
     * @default []
     * @see https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
     * @example ['identify', 'email']
     * Without the identify scope the user will not be returned.
     */
    scope?: string[];
    /**
     * Require email from user, adds the ['email'] scope if not present.
     * @default false
     */
    emailRequired?: boolean;
    /**
     * Require profile from user, adds the ['identify'] scope if not present.
     * @default true
     */
    profileRequired?: boolean;
    /**
     * Discord OAuth Authorization URL
     * @default 'https://discord.com/oauth2/authorize'
     */
    authorizationURL?: string;
    /**
     * Discord OAuth Token URL
     * @default 'https://discord.com/api/oauth2/token'
     */
    tokenURL?: string;
}
export declare function discordEventHandler({ config, onSuccess, onError }: OAuthConfig<OAuthDiscordConfig>): import("h3").EventHandler<import("h3").EventHandlerRequest, Promise<any>>;
