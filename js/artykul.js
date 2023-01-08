function refreshArticle() {
    var article_title = document.getElementById("article-title").innerText;
    if (article_title != "" && article_title != null && sessionStorage.getItem("changeArticle") != true) {
        sessionStorage.setItem("articleTitle", article_title);
    }
}

window.onbeforeunload = refreshArticle;