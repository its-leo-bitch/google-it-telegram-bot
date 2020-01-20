export namespace NSConfig {
  export interface IService {
    config: IConfigVars;

    get<Key extends keyof IConfigVars>(key: Key): IConfigVars[Key];
  }

  export interface IConfigVars {
    /**
     * Token from your bot
     */
    BOT_TOKEN: string;

    /**
     * API key from your Google Project
     */
    GOOGLE_API_KEY: string;

    /**
     * Google Custom Search Engines' ID
     */
    GCS_ENGINE_ID: string;

    /**
     * Use web hooks or not.
     *
     * @default false
     */
    WEB_HOOKS: boolean;

    PORT?: number | undefined;

    /**
     * Use only if you are using WebHooks.
     * This is the url that server will use for WebHooks.
     * You should config it in your bots settings
     * and then set it here. Should be secret,
     * for example, can contain your BOT_TOKEN.
     *
     * @example
     * 'https://server.tld:8443/secret-path'
     */
    WEB_HOOKS_SECRET_URL?: string;

    /**
     * Use only if you are using WebHooks.
     * The path from your WEB_HOOKS_SECRET_URL
     *
     * @example
     * '/secret-path'
     */
    WEB_HOOKS_PATH?: string;

    /**
     * Socks proxy url to use.
     * Leave it empty if you are not using socks proxy.
     * Helpfull in regions, where telegram is blocked.
     */
    SOCKS_PROXY?: string | undefined;
  }
}
