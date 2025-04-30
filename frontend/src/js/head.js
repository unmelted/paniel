/**
 * Theme: Hando - Responsive Bootstrap 5 Admin Dashboard
 * Author: Zoyothemes
 * Module/App: Theme Config Js
 */

class ThemeCustomizer {
    constructor() {
        this.html = document.getElementsByTagName('html')[0]
        this.config = {
            theme: 'dark'  // 기본값을 dark로 설정
        }
        this.defaultConfig = {
            theme: 'dark'  // 기본값을 dark로 설정
        }
    }

    initConfig() {
        this.html.setAttribute('data-bs-theme', 'dark')  // 항상 dark로 설정
    }

    init() {
        this.initConfig()
    }
}

new ThemeCustomizer().init()