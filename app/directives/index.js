import crunchTreeDirective from './crunch_tree_directive';
import crunchTreeNodeDirective from './crunch_tree_node_directive';

export default App => {
    crunchTreeDirective(App);
    crunchTreeNodeDirective(App);
};