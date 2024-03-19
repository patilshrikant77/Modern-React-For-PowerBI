import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config Azure AD app setting to be passed to Msal on creation
const TenantId = "9a39e593-8f37-4c2c-9ab8-71e7efe6a0ac";
const ClientId = "665de04b-89ce-4d9e-9cb7-e47b3d766072";

export const msalConfig: Configuration = {
    auth: {
        clientId: ClientId,
        authority: "https://login.microsoftonline.com/" + TenantId,
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    }
};

export const PowerBiPermissionScopes: string[] = [
    "https://analysis.windows.net/powerbi/api/Dashboard.Read.All",
    "https://analysis.windows.net/powerbi/api/Dataset.Read.All",
    "https://analysis.windows.net/powerbi/api/Report.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Group.Read.All",
    "https://analysis.windows.net/powerbi/api/Workspace.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Content.Create"
]

export const PowerBiLoginRequest: PopupRequest = {
    scopes: PowerBiPermissionScopes
};