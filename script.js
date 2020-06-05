/**
 * Helper function for creating car
 **/
function createCar(name, id) {
  return {
    name: name,
    id: id,
  };
}

/**
 * Helper function for creating model
 **/
function createModel(name, id, car) {
  return {
    name: name,
    id: id,
    car: car,
  };
}

/**
 * Helper function for creating configuration
 **/
function createConfiguration(name, id, model) {
  return {
    name: name,
    id: id,
    model: model,
  };
}

/**
 * Removes all options but the first value in a given select
 * and than selects the only remaining option
 **/
function removeOptions(select) {
  while (select.options.length > 1) {                
    select.remove(1);
  }
  
  select.value = "";
}

/**
 * Adds given options to a given select
 **/
function addOptions(select, options) {
  console.log(select, options)
  options.forEach(function(option) {
    select.options.add(new Option(option.name, option.id));
  });
}

/**
 * Select elements references
 **/
var carsSelect = document.getElementById('cars-select');
var modelsSelect = document.getElementById('models-select');
var configurationSelect = document.getElementById('configurations-select');

/**
 * Available cars
 **/
var cars = [
  createCar('DEV', 'development'),
  createCar('HARDENING', 'hardening'),
  createCar('PROD', 'production'),
];

/**
 * Available models
 **/
var models = [
  createModel('DEV', 'devdev', 'development'),
  createModel('DEV', 'harddev', 'hardening'),
  createModel('HARDENING', 'hardhard', 'hardening'),
  createModel('DEV', 'proddev', 'production'),
  createModel('HARDENING', 'prodhard', 'production'),
  createModel('PRODUCTION', 'prodprod', 'production'),
];

/**
 * Available configurations
 **/
var configurations = [
  createConfiguration('DEV SaaS Cluster: DevE2E', 'https://deve2e.dev.dynatracelabs.com/#dashboard;id=a2613b74-21ef-486e-9a55-ea8d3f32bfc5', 'devdev'),
  createConfiguration('DEV BAS & SSO', 'https://deve2e.dev.dynatracelabs.com/#dashboard;id=a2613b74-21ef-486e-9a55-ea8d3f32bfc5', 'devdev'),
  createConfiguration('DEV Synthetic Locations + Backend', 'https://deve2e.dev.dynatracelabs.com/#dashboard;id=a2613b74-21ef-486e-9a55-ea8d3f32bfc5', 'devdev'),
  createConfiguration('DEV Davis', 'https://deve2e.dev.dynatracelabs.com/#dashboard;id=a2613b74-21ef-486e-9a55-ea8d3f32bfc5', 'devdev'), 
  createConfiguration('DEV SaaS Cluster: UITestAutomation', 'https://igo04931.sprint.dynatracelabs.com/', 'harddev'),
  createConfiguration('DEV SaaS Cluster: loadtest-*', 'https://iripvtemzf.sprint.ruxitlabs.com/', 'harddev'),
  createConfiguration('DEV Cloudcontrol', 'https://hjl80179.sprint.dynatracelabs.com/', 'harddev'),
  createConfiguration('DEV MissionControl', 'https://yci39116.sprint.dynatracelabs.com/', 'harddev'),
  createConfiguration('DEV Managed Clusters: default tenant', 'https://mlb27515.sprint.dynatracelabs.com/', 'harddev'),
  createConfiguration('DEV Managed Clusters: old tenant (deprecated)', 'https://yci39116.sprint.dynatracelabs.com/', 'harddev'),
  createConfiguration('DEV Managed Clusters: loadtest', 'https://iripvtemzf.sprint.ruxitlabs.com/', 'harddev'),
  createConfiguration('SPRINT Mission Control', 'https://igo04931.sprint.dynatracelabs.com/', 'hardhard'),
  createConfiguration('SPRINT Managed Cluster: Sprint-SaaS', 'https://igo04931.sprint.dynatracelabs.com/', 'hardhard'),
  createConfiguration('SPRINT Managed Clusters: default tenant', 'https://ivc46376.sprint.dynatracelabs.com/', 'hardhard'),

  createConfiguration('DEV Website dev.dynalabs.io', 'https://dwypuwjjgx.live.dynatrace.com/', 'proddev'),
  createConfiguration('SPRINT Website sprint.dynalabs.io', 'https://dwypuwjjgx.live.dynatrace.com/', 'prodhard'),
  createConfiguration('PROD Managed: Default Self-Mon tenant for all Managed Cluster that allow One Agent Monitoring', 'https://eaw32362.live.dynatrace.com/n', 'prodprod'),
  createConfiguration('PROD Managed: prod-saas.dynatrace-managed.com', 'https://tid13921.live.dynatrace.com/', 'prodprod'),
  createConfiguration('PROD Managed: that have a dedicated Self-Mon tenant', 'https://dev-wiki.dynatrace.org/pages/viewpage.action?pageId=161235237#ManagedSelf-MonitoringonCluster(us-east-21)-MonitoringonCluster(us-east-21)-TenantsonSelf-MonCluster', 'prodprod'),
  createConfiguration('PROD Website www.dynatrace.com', 'https://dwypuwjjgx.live.dynatrace.com/', 'prodprod'),  
];

/**
 * Updates models
 **/
function updateModels() {
  var selectedCar = carsSelect.value;
  var options = models.filter(function(model) {
    return model.car === selectedCar;
  });
  
  removeOptions(modelsSelect);
  removeOptions(configurationSelect);
  addOptions(modelsSelect, options);
}

/**
 * Updates configurations
 */
function updateConfigurations() {
  var selectedModel = modelsSelect.value;
  var options = configurations.filter(function(configuration) {
    return configuration.model === selectedModel;
  });
  
  removeOptions(configurationSelect);
  addOptions(configurationSelect, options);
}

/**
 * Adds options to car select
 **/
addOptions(carsSelect, cars);

$(document).ready(function() {
    $("input[name=group1]").on( "change", function() {

         var test = $(this).val();
         $(".desc").hide();
         $("#"+test).show();
    } );

});


