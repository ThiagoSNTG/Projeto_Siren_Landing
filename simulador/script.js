const add250 = document.getElementById('add250');
const addCustom = document.getElementById('addCustom');
const customAmount = document.getElementById('customAmount');

const waterTotal = document.getElementById('waterTotal');
const waterFill = document.getElementById('waterFill');
const progressText = document.getElementById('progressText');
const drinkCount = document.getElementById('drinkCount');
const drinkHistory = document.getElementById('drinkHistory');

const centralIdle = document.getElementById('centralIdle');
const centralAlert = document.getElementById('centralAlert');
const alertTime = document.getElementById('alertTime');
const ackAlert = document.getElementById('ackAlert');

const contactIdle = document.getElementById('contactIdle');
const contactAlert = document.getElementById('contactAlert');
const contactAlertTime = document.getElementById('contactAlertTime');
const openContactAlert = document.getElementById('openContactAlert');

const contactDetails = document.getElementById('contactDetails');
const closeDetails = document.getElementById('closeDetails');
const detailsTime = document.getElementById('detailsTime');

const monitorClock = document.getElementById('monitorClock');
const contactClock = document.getElementById('contactClock');

const resetAll = document.getElementById('resetAll');

const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');

const DAILY_GOAL = 2000;
const SECRET_CODE = 180;

let total = 0;
let records = [];
let alertActive = false;
let toastTimer = null;
