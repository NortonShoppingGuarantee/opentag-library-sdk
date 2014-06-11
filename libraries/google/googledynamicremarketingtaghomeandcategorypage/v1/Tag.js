//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googledynamicremarketingtaghomeandcategorypage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google Dynamic Remarketing Tag - Home and Category Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
				uv: ""
			}, {
				name: "Page Category",
				description: "Page Category",
				token: "cat",
				uv: "universal_variable.page.category"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			window.google_tag_params = {
				ecomm_pagetype: '' + this.valueForToken("cat")
			};

			window.google_conversion_id = this.valueForToken("google_id");
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "//www.googleadservices.com/pagead/conversion.js";
			document.head.appendChild(script);
			/*~SCRIPT*/
		},
		pre: function() {
			/*PRE*/
			/*~PRE*/
		},
		post: function() {
			/*POST*/
			/*~POST*/
		}
	});