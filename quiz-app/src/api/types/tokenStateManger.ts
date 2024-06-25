export default interface ITokenStateManager {
    setToken(newToken: string): void
    setRefreshToken(newRefreshToken: string): void
    getToken(): string | null
    getRefreshToken(): string | null
    revokeTokens(): void
}