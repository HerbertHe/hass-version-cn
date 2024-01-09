import fs from "fs"
import path from "path"

import { TMP_P } from "./sync.js"
import { FILES } from "./const.js"

const DIST_P = path.resolve("dist")

/**
 * json 适配器
 * @param {string} c
 */
const json_adapter = (c) => {
    let tmp = c.replace(
        "https://github.com/",
        "https://mirror.ghproxy.com/https://github.com/"
    )

    tmp = tmp.replace(
        /"supervisor":\s*"ghcr.io\/([^"]+)"/,
        `"supervisor": "docker.nju.edu.cn/herberthe0229/{arch}-hassio-supervisor"`
    )

    while (/"ghcr.io\//.test(tmp)) {
        tmp = tmp.replace(`"ghcr.io`, `"ghcr.nju.edu.cn`)
    }

    return tmp
}

/**
 *
 * @param {string} c
 * @returns
 */
const rpi_adapter = (c) => {
    let tmp = c
    while (/"https:\/\/github.com/.test(tmp)) {
        tmp = tmp.replace(
            `"https://github.com/`,
            '"https//mirror.ghproxy.com/https://github.com/'
        )
    }

    return c
}

const adapations = new Map([
    ["beta.json", json_adapter],
    ["dev.json", json_adapter],
    ["stable.json", json_adapter],
    ["rpi-imager-haos.json", rpi_adapter],
])

const adapter = (name, fn) => {
    if (!FILES.includes(name)) return
    const content = fs
        .readFileSync(path.resolve(TMP_P, name), "utf-8")
        .toString()

    const result = !!fn ? fn(content) : content

    if (!fs.existsSync(DIST_P)) {
        fs.mkdirSync(DIST_P)
    }

    fs.writeFileSync(path.resolve(DIST_P, name), result)
}

export const auto_adapter = () => {
    console.log("Adapting...")
    FILES.forEach((f) => adapter(f, adapations.get(f)))
}
