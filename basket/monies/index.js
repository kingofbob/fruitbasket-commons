module.exports = {
    formatMonies(monies){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monies);
    }
}