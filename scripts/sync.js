import fs from "fs"
import path from "path"

import { get_files_raw_urls } from "./const.js"

export const TMP_P = path.resolve("tmp")

const write_to_tmp = (f_name, data) => {
    if (!fs.existsSync(TMP_P)) {
        fs.mkdirSync(TMP_P)
    }

    fs.writeFileSync(path.resolve(TMP_P, f_name), data)
}

export const fetch_file = async (name, url) => {
    // 写的粗糙，github 执行够用就行
    const res = await fetch(url)
    const data = await res.text()

    write_to_tmp(name, data)
}

export const auto_sync = async () => {
    const urls = get_files_raw_urls()

    urls.forEach(async (u) => await fetch_file(...u))
}
