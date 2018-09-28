// .easy-mock.js
module.exports = {
  host:" https://www.easy-mock.com",
  output: "api", // 产出到项目下的 api 目录，不用手动创建
  template: "axios", // 基于 easy-mock-templates 提供的 axios 模板
  projects: [
    {
      id: " 5b31f98e08b3642d152c50eb", // 例：58fef6ac5e43ae5dbea5eb53
      name: "demo" // 该项目下的 API 生成之后会被放到 api/demo 目录下
    }
  ]
};
