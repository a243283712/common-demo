// 定义泛型的时候，可以一次定义多个类型参数
// 定义了一个swap函数，用来交还输入的元祖
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['hello', 12]);
