import { auto_sync } from "./scripts/sync.js"
import { auto_adapter } from "./scripts/adapter.js"

auto_sync().then(() => {
    auto_adapter()
})
