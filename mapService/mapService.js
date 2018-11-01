var mapService = (function () {
    function DataStore() {
        this.dataStore = {}
    }

    DataStore.prototype.set = function (_key, _value) {
        try {
            if (_key) this.dataStore[_key] = _value
        } catch (e) {
            return e
        }
    }

    DataStore.prototype.get = function (_key) {
        return !this.hasKey(_key) ? null : this.dataStore[_key]
    }

    DataStore.prototype.hasKey = function (_key) {
        for (var key in this.dataStore) {
            if (key == _key) return true
        }
        return false
    }

    DataStore.prototype.delete = function (_key) {
        try {
            delete this.dataStore[_key]
        } catch (e) {
            return e
        }
    }

    DataStore.prototype.clear = function () {
        try {
            delete this.dataStore
            this.dataStore = {}
        } catch (e) {
            return e
        }
    }

    DataStore.prototype.size = function () {
        return Object.keys(this.dataStore).length
    }

    DataStore.prototype.keys = function () {//ie9 
        return Object.keys(this.dataStore)
    }

    DataStore.prototype.values = function () {
        var values = []
        for (var key in this.dataStore) {
            values.push(this.dataStore[key])
        }
        return values
    }

    var dataStore = new DataStore()
    var observerList = {}
    var on, trigger, off, once

    on = function (_key, fn) {
        if (!observerList[_key]) observerList[_key] = []
        observerList[_key].push(fn)
    }

    trigger = function () {
        var _key = [].shift.call(arguments)
        var fns = observerList[_key]

        if (!fns || fns.length === 0) return false

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }

    off = function (_key, fn) {
        var fns = observerList[_key]

        if (!fns) return false

        if (!fn) {
            fns && (fns.length = 0)
        } else {
            for (var i = fns.length - 1; i > 0; i--) {
                var _fn = fns[i]
                if (_fn === fn) fns.splice(i, 1)
            }
        }
    }

    once = function () {
        var _key = [].shift.call(arguments)
        var fns = observerList[_key]

        if (!fns || fns.length === 0) return false

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
            off(_key)
        }
    }

    return {
        DataStore: dataStore,
        on: on,
        trigger: trigger,
        off: off,
        once: once
    }
})()

export default mapService
// If you have any questions, please contact Feng Jiabao.
