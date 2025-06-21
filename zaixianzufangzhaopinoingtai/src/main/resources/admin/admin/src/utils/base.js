const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianzufangzhaopinoingtai/",
            name: "zaixianzufangzhaopinoingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianzufangzhaopinoingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线租房和招聘平台"
        } 
    }
}
export default base
