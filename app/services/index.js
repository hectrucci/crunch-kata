import crunchHttpLayerService from './crunch_http_layer_service';
import treeService from './tree_service';
import orderService from './order_service';
import variablesService from './variables_service';

export default App => {
    crunchHttpLayerService(App);
    treeService(App);
    orderService(App);
    variablesService(App);
};