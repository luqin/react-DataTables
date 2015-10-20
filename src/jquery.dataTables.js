import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap';
import dataTables from 'datatables';
import 'datatables-tabletools';
import 'datatables-colreorder';
import 'datatables-scroller';
import 'datatables-bootstrap';

import language from './datatables_locale_zh-CN';

_.extend($.fn.dataTable.defaults.oLanguage, language);

$.fn.dataTable.ext.errMode = function (e, settings, techNote, message) {
    try {
        console.error(arguments);
    } catch (x) {
    }
};

export default dataTables;
