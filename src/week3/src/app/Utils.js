

function goscreen(nthis, routeName, param = null) {
    if (param) {
        nthis.props.navigation.navigate(routeName,
            { ...param});
    } else {
        nthis.props.navigation.navigate(routeName);
    }
}

function goback(nthis, routeName = '') {
    if (routeName == '')
        nthis.props.navigation.goBack();
    else nthis.props.navigation.goBack(routeName);
}

function getParam(nthis, keys, defaultValue) {
    let param = nthis.props.navigation.getParam(keys, defaultValue);
    return param;
}

export default {
    goscreen, goback, getParam
};