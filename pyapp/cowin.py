# -*- coding: utf-8 -*-
"""
Created on Fri Apr 30 15:03:15 2021

@author: Admin
"""

import requests
import json

def checkPinCode(pincode):
    response = requests.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pincode+'&date=01-05-2021')
    if response.status_code == 200:
        data = response.json()
        if len(data['centers']) > 0:
            print('Centers Available!!')
        else:
            print('Centers Not Available!!')

checkPinCode('560076')