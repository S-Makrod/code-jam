import ITokenStateManager from './types/tokenStateManger'

class TokenStateManager implements ITokenStateManager {
    private static token: string | null = null
    private static refreshToken: string | null = null

    setToken = (newToken: string): void => {
        TokenStateManager.token = newToken
    }

    setRefreshToken = (newRefreshToken: string): void => {
        TokenStateManager.refreshToken = newRefreshToken
    }

    getToken = (): string | null => (TokenStateManager.token !== null)? `Bearer ${TokenStateManager.token}` : null

    getRefreshToken = (): string | null => TokenStateManager.refreshToken

    revokeTokens(): void {
        TokenStateManager.refreshToken = null
        TokenStateManager.token = null
    }
}

export default TokenStateManager