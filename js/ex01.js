function buscarIssues() {
    function GithubRepo(username, reponame) {
        var list;
        var response = {
            buscaIssues: function () {
                var url = 'https://api.github.com/repos/' + username + '/' + reponame + '/issues';
                return $.ajax({
                    url: url,
                    success: function (result) {
                        list = result;
                    }
                });
            },
            populaIssues: function (element) {
                var html;
                for (var i = 0; i < list.length; i++) {
                    html += '<tr>';
                    html += '<td>' + list[i].number + '</td>';
                    html += '<td>' + list[i].title + '</td>';
                    html += '<tr>';

                }
                $(element + ' tbody').html(html);
            }
        }
        return response;
    }
    var username = $('#usuario').val();
    var reponame = $('#repositorio').val();
    var leRepo = GithubRepo(username, reponame);
    leRepo.buscaIssues().done(function () {
        leRepo.populaIssues('#issuestable');
    });

}