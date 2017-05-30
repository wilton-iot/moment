/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["moment", "assert"], function(moment, assert) {
    var date = moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm");
    var str = date.format("YYYY-MM-DD_HH:mm:ss");
    console.log("test: moment sanity");
    assert.equal(str, "2010-10-20_04:30:00");
});
