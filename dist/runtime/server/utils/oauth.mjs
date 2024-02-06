import { githubEventHandler } from "../lib/oauth/github.mjs";
import { googleEventHandler } from "../lib/oauth/google.mjs";
import { spotifyEventHandler } from "../lib/oauth/spotify.mjs";
import { twitchEventHandler } from "../lib/oauth/twitch.mjs";
import { auth0EventHandler } from "../lib/oauth/auth0.mjs";
import { microsoftEventHandler } from "../lib/oauth/microsoft.mjs";
import { discordEventHandler } from "../lib/oauth/discord.mjs";
import { battledotnetEventHandler } from "../lib/oauth/battledotnet.mjs";
import { keycloakEventHandler } from "../lib/oauth/keycloak.mjs";
import { linkedinEventHandler } from "../lib/oauth/linkedin.mjs";
import { cognitoEventHandler } from "../lib/oauth/cognito.mjs";
export const oauth = {
  githubEventHandler,
  spotifyEventHandler,
  googleEventHandler,
  twitchEventHandler,
  auth0EventHandler,
  microsoftEventHandler,
  discordEventHandler,
  battledotnetEventHandler,
  keycloakEventHandler,
  linkedinEventHandler,
  cognitoEventHandler
};
