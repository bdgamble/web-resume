/**
 * No need to fetch all jQuery method, we just need
 * ajax method
 */

(function(ajax) {

	'use strict';

	var Resume = Resume || {};

	/*
	 * This method is only used to simplify ajax request
	 * and set unified config
	 */
	Resume.get = function(path, callback) {
		ajax({
			url: path,
			cache: false,
			dataType: 'json'
		})
		.done(function(response) {
			callback(response.data);
		});
	};

	/**
	 * This method is used to initiate ajax calls and retrieve
	 * all JSON data from resume
	 */
	Resume.init = function(paths) {

		// Loop variables
		var i, j;

		/**
		 * Load all educations data from JSON files
		 */
		Resume.get(paths.educations, function(data) {

			for (i in data) {
				var education = document.createElement('li'),
					edTime = document.createElement('div'),
					edCollege = document.createElement('strong'),
					edDegree = document.createElement('div');

				edTime.innerText = data[i].beginYear + ' - ' + data[i].endYear;
				edCollege.innerText = data[i].college;
				edDegree.innerText = data[i].degree;

				edDegree.className = 'education-degree';
				education.className = 'education';

				education.appendChild(edTime);
				education.appendChild(edCollege);
				education.appendChild(edDegree);

				document.getElementById('educations-placeholder').appendChild(education);
			}
		});

		/**
		 * Load all works data from JSON files.
		 * TODO: It should be rendered using template script tag
		 * or using another custom element.
		 */
		Resume.get(paths.works, function(data) {

			for (i in data) {
				var workWrapper = document.createElement('li'),
					workHeader = document.createElement('div'),
					workTime = document.createElement('div'),
					workRole = document.createElement('div'),
					workPlace = document.createElement('strong'),
					workTitle = document.createElement('div'),
					workTasks = document.createElement('ul');

				workPlace.innerText = data[i].place;
				workTitle.innerText = data[i].title;
				workTime.innerText = data[i].start;
				workWrapper.title = data[i].duration;

				workTasks.innerHTML = "<strong>Responsibilities:</strong>";

				var tasks = data[i].tasks;
				for (j in tasks) {
					var task = document.createElement('li')
					task.className = 'work-task';
					task.innerText = tasks[j];
					workTasks.appendChild(task);
				}

				// styling
				workWrapper.className = 'work';
				workHeader.className = 'work-header';
				workTime.className = 'work-time';
				workRole.className = 'work-role';
				workPlace.className = 'work-place'
				workTitle.className = 'work-title';
				workTasks.className = 'work-tasks';

				if (i == 0) {
					workTasks.className = 'work-tasks work-tasks-active';
				}

				workRole.appendChild(workPlace);
				workRole.appendChild(workTitle);
				workHeader.appendChild(workTime);
				workHeader.appendChild(workRole);
				workWrapper.appendChild(workHeader);
				workWrapper.appendChild(workTasks);

				document.getElementById('works-placeholder').appendChild(workWrapper)
			}
		});

		/**
		 * Load all skills data from JSON files.
		 * No need to style 'skill' element because
		 * we can use simple CSS selector
		 */
		Resume.get(paths.skills, function(data) {

			for (i in data) {
				var skill = document.createElement('li');
				skill.innerText = data[i];
				document.getElementById('skills-placeholder').appendChild(skill);
			}
		});
	};

	window.Resume = Resume;

})(jQuery.ajax)
