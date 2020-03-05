
class Analytics {
    static event (event, eventContent = undefined) {
        if (!gtag) {
            return;
        }

        gtag('event', event, eventContent);
    }
}

export default class AnalyticsServices {
    static customEvent () {
        Analytics.event('custom_event_name', {
            'event_category': 'custom_event_category',
            'event_label': `Custom Event Label`,
            'value': 1,
        });
    }
}
