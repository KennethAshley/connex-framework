export function newTxVisitor(
    ctx: Context,
    id: string
): Connex.Thor.TransactionVisitor {
    return {
        get id() {
            return id
        },
        get: () => ctx.driver.getTransaction(id, ctx.trackedHead.id),
        getReceipt: () => ctx.driver.getReceipt(id, ctx.trackedHead.id)
    }
}
