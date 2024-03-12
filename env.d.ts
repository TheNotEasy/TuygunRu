declare global {
  namespace NodeJS {
    interface ImportMeta {
      [key: string]: unknown
    }
  }
}
