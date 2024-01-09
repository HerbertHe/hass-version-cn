export const FILES = [
    "apparmor.txt",
    "apparmor_beta.txt",
    "apparmor_dev.txt",
    "apparmor_stable.txt",
    "beta.json",
    "dev.json",
    "online.txt",
    "stable.json",
    "rpi-imager-haos.json",
    "update-supervisor.txt", // TODO 之后做处理
]

export const GITHUB_URL = `https://ghproxy.net/https://raw.githubusercontent.com/home-assistant/version/master/`

export const get_files_raw_urls = () => FILES.map(f => [f, `${GITHUB_URL}${f}`])
