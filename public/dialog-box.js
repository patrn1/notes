

class DialogBox {
    text = "Are you sure ?";
    action;

    /**
     * Calls an action an closes the dialog box.
     */
    approve() {
        this.action();
        this.cancel();
    }

    /**
     * Hides the dialog box.
     */
    cancel() { this.action = null; }
}

Vue.component('dialog-box', {
    props: ['text'],
    template: `
        <div>
           <div @click="$emit('cancel')" class="dialog-box-bg"></div>
            <div class="dialog-box">
                <div><span>{{ text }}</span></div>
                <div class="btn-group">
                    <button @click="$emit('approve')">Yes</button>
                    <button @click="$emit('cancel')">No</button>
                </div>
            </div>
        </div>
      `
});
