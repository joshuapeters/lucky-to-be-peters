import { LocationDetail } from "components/Details/DetailCard/index";
import cmcl from "./img/cmcl.png";
import commonwealth from './img/commonwealth.jpg';
import federaltap from './img/federaltap.jpg';

let _locationDetails = [
    {
        location: "Ceremony",
        infoText: "Join us as we tie the knot in Community Menonite Church of Lancaster's beautiful sanctuary.",
        infoSubtext: "",
        timeFrame: "11:30am start time",
        imageUrl: cmcl,
        directionsUrl:  "https://goo.gl/maps/SnpV4zJW4QU2",
        websiteUrl:     "https://communitymennonite.org/",
        contactUrl:     "https://communitymennonite.org/contact-us/"
    } as LocationDetail,
    {
        location: "Private Reception",
        infoText: "For select family and friends, join us afterwards for some delicious vegan dishes and mingling at Commonwealth On Queen!",
        infoSubtext: "",
        timeFrame: "Following Ceremony",
        imageUrl: commonwealth,
        directionsUrl:  "https://goo.gl/maps/D3mL81hxAHD2",
        websiteUrl:     "https://commonwealthonqueen.com/",
        contactUrl:     "https://commonwealthonqueen.com/contact/"
    } as LocationDetail,
    {
        location: "Afterparty",
        infoText: "Come grab a slice and a drink with us later at Federal Taphouse in Lancaster!",
        infoSubtext: "Light refreshments served with a cash bar available.",
        timeFrame: "6pm - 8pm",
        imageUrl: federaltap,
        directionsUrl:  "https://goo.gl/maps/Ab1DYToosvL2",
        websiteUrl:     "https://www.federaltaphouse.com/lancaster-pa/",
        contactUrl:     "https://www.federaltaphouse.com/lancaster-pa/directions-and-hours/"
    } as LocationDetail,
] as LocationDetail[];

export var Details = {
    LocationDetails: _locationDetails
}