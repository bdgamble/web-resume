(function() {
    'use strict';

    var getData = function(path, callback) {
        if (path != null) {
            $.ajax({
                url: path,
                dataType: 'json',
                success: function (response) {
                    callback(response);
                }
            });
        }
    };

    Polymer('web-resume', {
        name: 'Your Name',
        alias: 'your-alias',
        avatar: null,
        email: 'example@domain.com',
        phone: '+1 234 56789',
        site: 'http://example.com',
        country: 'Your Country',
        data: {
            educations: [],
            works: [],
            skills: []
        },
        ready: function () {
            this.info = {
                name: this.name,
                alias: this.alias,
                avatar: this.avatar,
                contact: {
                    email: this.email,
                    phone: this.phone,
                    site: this.site,
                    country: this.country,
                }
            };

            var data = this.data;

            getData(this.educations, function (response) {
                data.educations = response.data;
            });

            getData(this.works, function (response) {
                data.works = response.data;
            });

            getData(this.skills, function (response) {
                data.skills = response.data;
            });
        }
    });
}();
