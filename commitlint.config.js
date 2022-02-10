/* eslint-disable */

module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 100],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 100],
        "header-max-length": [2, "always", 100],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [
            2,
            "never",
            ["sentence-case", "start-case", "pascal-case", "upper-case"],
        ],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "feat", // 添加新功能
                "fix", // 修复bug，可以在footer写上修复的bug编号
                "doc", // 添加文档
                "style", // 修改代码格式以及风格使代码看起来更清晰
                "refactor", // 不改变功能的情况下修改和优化代码
                "test", // 增加测试用例
                "chore", // 增加一些杂项，比如添加依赖、修改构建过程
            ],
        ],
    },
};
