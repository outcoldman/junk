'use strict';
angular.module("mylinkextensions", ['openshiftConsole'])
       .run(function(extensionRegistry) {
          extensionRegistry.add('log-links', _.spread(function(resource, options) {
            return {
              type: 'dom',
              node: '<span><a href="http://splunk.local.outcold.solutions:8000/en-US/app/monitoringopenshift/search?q=search%20sourcetype%3D%22openshift_logs%22%20openshift_pod_name%3D%22'+encodeURIComponent(resource.metadata.name)+'*%22">' + resource.metadata.name + '</a><span class="action-divider">|</span></span>'
            };
          }));
       });
hawtioPluginLoader.addModule("mylinkextensions");