htmx.onLoad(function(content) {

    $('#produkty_formset tbody').sortable({  // https://github.com/SortableJS/Sortable
        // https://github.com/SortableJS/Sortable#options
        // group: 'nested',
        animation: 150,
        draggable: 'tr',
        ghostClass: 'sortable-ghost',  // Class name for the drop placeholder
        chosenClass: 'sortable-chosen',  // Class name for the chosen item
        dragClass: 'sortable-drag',  // Class name for the dragging item
        handle: 'tr:not(input)',

        // fallbackOnBody: true,
        // swapThreshold: 0.65,
        // invertSwap: true,

        // MultiDrag  https://github.com/SortableJS/Sortable/tree/master/plugins/MultiDrag
        multiDrag: true, // Enable multi-drag
        // multiDragKey: 'CTRL', // muze byt i null
        selectedClass: 'selected', // The class applied to the selected items
        fallbackTolerance: 3, // So that we can select items on mobile
        // forceFallback: true,

        // blokovani popresunovani jiz podepsanych lidi
        filter: '.answered',
        // onMove: function (evt) {
        //     var neSignedList = evt.to.className.indexOf('answered') === -1; // cilovy list nema class signed
        //     var neSignedSoused = evt.related.className.indexOf('answered') === -1; // soused list nema class signed
        //     return neSignedList && neSignedSoused;  // kombinace obou podminek
        // },
        // over: function( event, ui ) { $('.sortable').css('overflow', 'visible'); },
        // stop: function() { $('.sortable').css('overflow', 'hidden'); }
        update: function() {
            $(this).find('tr').each(function(i) {
                if ($(this).find('input[id$=chair_id]').val() ||
                  $(this).find('select[id$=member]').val() ||
                      $(this).find('select[id$=description]').val()) {
                    $(this).find('input[id$=order]').val(i+1);
                }
            });
        }
    })
})

