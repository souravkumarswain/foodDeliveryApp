import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return <>
        <div className = "header">
            <div className="logo">
                <img src= "https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png" alt="Logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
}

const resList = [
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "155268",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/304f2eda-d5da-470b-b552-625592cc0ea6_155268.JPG",
                      "locality": "Kondapur",
                      "areaName": "Kondapur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "parentId": "721",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "9.0K+",
                      "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "FREE ITEM"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "1.4K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-kondapur-rest155268",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "491518",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Gachibowli",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "parentId": "61955",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.4",
                          "ratingCount": "185"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/chinese-wok-gachibowli-rest491518",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "489739",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_489739.JPG",
                      "locality": "Serilingampally Mandal",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "parentId": "434792",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/big-bowl-serilingampally-mandal-gachibowli-rest489739",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "456004",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/1b23171d-0fdb-436a-b073-917f958f68be_456004.JPG",
                      "locality": "Raja Rajeshwar Nagar",
                      "areaName": "Kondapur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4,
                      "parentId": "547",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-27 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/kfc-raja-rajeshwar-nagar-kondapur-rest456004",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1111932",
                      "name": "Mealy - Your Everyday Meal",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/0fb2ff2e-1f8e-4933-96f3-2eebf7b238cf_1111932.jpg",
                      "locality": "Srinagar Colony",
                      "areaName": "Miyapur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Beverages",
                        "Street Food"
                      ],
                      "avgRating": 3.6,
                      "parentId": "11705",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "25",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "EatRight",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/mealy-your-everyday-meal-srinagar-colony-miyapur-rest1111932",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "68591",
                      "name": "Homely",
                      "cloudinaryImageId": "ul45t1h60hftkbida1vo",
                      "locality": "SR Nagar Main Rd",
                      "areaName": "Miyapur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Home Food",
                        "South Indian",
                        "Beverages",
                        "Desserts",
                        "Thalis"
                      ],
                      "avgRating": 3.5,
                      "parentId": "4043",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "87K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "C",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/homely-sr-nagar-main-rd-miyapur-rest68591",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "984733",
                      "name": "Little Italy",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/675cb9b2-77c5-42f5-9b69-c183b264b852_984733.JPG",
                      "locality": "Hitech City",
                      "areaName": "Hitech City",
                      "costForTwo": "₹1200 for two",
                      "cuisines": [
                        "Italian",
                        "Pizzas",
                        "Pastas",
                        "Salads",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "618442",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "571",
                      "sla": {
                        "deliveryTime": 61,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-70 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "893"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dc49a170-b131-4541-9cbe-05b221c95b79"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/little-italy-hitech-city-rest984733",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }]

const RestaurantCard =(props) => {
    const {restaurant} = props;
    const{name, cloudinaryImageId, cuisines,avgRating, costForTwo} = restaurant?.info
    return <>
    <div className="restaurant-card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Restaurant"/>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <button>Order Now</button>
    </div>
    </>
}

const Body = () => {
    return <>
    <input className= "search-bar" type="text" placeholder="Search your Food.."></input>
    <div className="restaurant-list">
        {
            resList.map((restaurant) => {
                return <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>
            })
        }
    </div>
    </>
}

const DeliveryAppLayout = () => {
    return <>
        <Header/>
        <Body/>
        {/* <Footer/> */}
    </>
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DeliveryAppLayout/>)