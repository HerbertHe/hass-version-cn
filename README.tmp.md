# hass-version-cn

Home Assistant Version for using in China Mainland

便于在中国大陆使用解决 Home Assistant 更新的问题

## 项目原理 Principle

Improve the update speed of Home Assistant by replacing the download link of `version.json` with proxy sites

替换 Home Assistant 的 `version.json` 下载链接，使用镜像站的方式提高更新速度

- `ghcr.io`

```diff
- ghcr.io/
+ ghcr.nju.edu.cn/
```

- `GitHub releases`

```diff
- https://github.com/
+ https://mirror.ghproxy.com/https://github.com/
```

查看哔哩哔哩视频了解原理

See the Video from Bilibili to get the principle

【从源码角度独家分析HomeAssistant更新速度慢的原因及解决思路】 <https://www.bilibili.com/video/BV1Pg4y1Q7MQ/?share_source=copy_web&vd_source=6ce27185244489cf4fec397671080b0a>

## 信息 Info

The project is based on [home-assistant/version](https://github.com/home-assistant/version) &copy; UNLICENSED

项目基于 [home-assistant/version](https://github.com/home-assistant/version) &copy; UNLICENSED

The proxy for `ghcr.io` is provided by [南京大学镜像站](https://doc.nju.edu.cn/books/35f4a/page/ghcr)

`ghcr.io` 代理由 [南京大学镜像站](https://doc.nju.edu.cn/books/35f4a/page/ghcr) 提供

## 许可证 LICENSE

GPL-3.0 &copy; Herbert He
