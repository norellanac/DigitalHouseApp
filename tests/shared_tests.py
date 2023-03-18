from pytest_bdd import (
    given,
    then,
    when,
    parsers,
)
import os
import time
import random
import string
from appium.webdriver.common.touch_action import TouchAction


# GIVEN

@given('user opens app')
def open_app(driver):
    driver.reset()
    # driver.launch_app()

@given('user refreshes app')
def open_app(driver):
    driver.launch_app()

@given('user has app open')
def has_app_open(driver):
    pass

#WHEN

@when(parsers.parse('user waits {number:d} seconds'))
def user_waits(driver, number):
    time.sleep(number)

@when(parsers.parse('user taps text {text}'))
def tap_text(driver, text):
    allow_if_needed(driver)
    time.sleep(1)
    print('usertapstext', text)
    link = driver.find_element_by_xpath("//*[@text='" + text + "']")
    link.click()

@when(parsers.parse('user taps {button_text}'))
def tap_button(driver, button_text):
    allow_if_needed(driver)
    time.sleep(1)
    link = get(driver, "#" + button_text)
    link.click()

@when(parsers.parse('user navigates to {nav}'))
def navigate_to(driver, nav):
    allow_if_needed(driver)
    time.sleep(1)
    link = get(driver, "#" + nav)
    link.click()

@when(parsers.parse('go back'))
def navigate_back(driver):
    allow_if_needed(driver)
    time.sleep(1)
    driver.back()


@when(parsers.parse('user inputs numbers {numbers} to {input_name}'))
def input_text(driver, numbers, input_name):
    allow_if_needed(driver)
    time.sleep(1)
    input_field = get(driver, "#" + input_name)
    input_field.set_value(numbers)

@when('user hits enter')
def hit_enter(driver):
    allow_if_needed(driver)
    time.sleep(1)
    driver.press_keycode(66)

@when('user scrolls down')
def scroll_down(driver):
    allow_if_needed(driver)
    time.sleep(1)
    driver.swipe(500, 1000, 500, 500, 500)

@when('user accepts alert')
def accept_alert(driver):
    time.sleep(1)
    # press specific coordinate
    driver.switch_to.alert.accept()



# THEN
@then(parsers.parse('user should see "{val}" in first home item text {label}'))
def see_home_first_item(driver, val, label):
    first_home_item = get(driver, '#' + label, True)
    print(first_home_item[0])
    print(first_home_item[0].text)
    assert first_home_item[0].text == val

@then(parsers.parse('user should see "{val}" in first withdraw item text {label}'))
def see_home_first_item(driver, val, label):
    first_home_item = get(driver, '#' + label, True)
    print(first_home_item[0])
    print(first_home_item[0].text)
    assert first_home_item[0].text == val



# UTILITY

def sign_in(driver, email, password):
    email_field = get(driver, "#Email Field")
    email_field.set_value(email)
    next_button = get(driver, "#Next")
    next_button.click()
    time.sleep(1)
    password_field = get(driver, "#Password Field")
    password_field.set_value(password)
    hide_keyboard_if_needed(driver)
    next_button = get(driver, "#Next")
    next_button.click()
    allow_if_needed(driver)

def text_class(driver):
    if driver.desired_capabilities['platformName'] == 'iOS':
        return 'XCUIElementTypeStaticText'
    else:
        return 'android.widget.TextView'

def hide_keyboard_if_needed(driver):
    try:
        driver.hide_keyboard()
    except:
        pass

def get(driver, text, all=False):
    print("GET " + text)
    timeout_seconds = 10
    start = time.time()
    counter = 0

    while time.time() < start + timeout_seconds:
        print(counter) # for debugging purposes

        # Accessibility Label
        if text[0] == "#":
            try:
                if all:
                    el = driver.find_elements_by_accessibility_id(text[1:])
                    print("FOUND: " + text)
                    return el
                else:
                    el = driver.find_elements_by_accessibility_id(text[1:])[-1]
                    print("FOUND: " + text)
                    return el

            except:
                pass

        # Name
        if text[0] == "&":
            try:
                if all:
                    el = driver.find_elements_by_name(text[1:])
                    print("FOUND: " + text)
                    return el
                else:
                    el = driver.find_elements_by_name(text[1:])[-1]
                    print("FOUND: " + text)
                    return el

            except:
                pass

        # Class
        if text[0] == "$":
            try:
                if all:
                    el = driver.find_elements_by_class_name(text[1:])
                    print("FOUND: " + text)
                    return el
                else:
                    el = driver.find_elements_by_class_name(text[1:])[-1]
                    print("FOUND: " + text)
                    return el

            except:
                pass

        # Content Desc
        if text[0] == "@":
            path = "//*[@content-desc=\"" + text + "\"]"
            try:
                el = driver.find_element_by_xpath(path)
                print("FOUND: " + text)
                return el
            except:
                pass

        # Find by xpath (just the text of the element)
        else:
            path = "//*[@text=\"" + text + "\"]"
            try:
                el = driver.find_element_by_xpath(path)
                print("FOUND: " + text)
                return el
            except:
                pass

        counter += 1
    print('Could not find text %r after %r seconds' % (text, timeout_seconds))

def allow_if_needed(driver):
    if driver.desired_capabilities['platformName'] == 'iOS':
        al = get(driver, '#Always Allow')
        if al:
            al.click()
        el = get(driver, '#Allow')
        if el:
            el.click()

def find(name, path):
    for root, dirs, files in os.walk(path):
        if name in dirs:
            return os.path.join(root, name)

# a hack -- better to use headerBackTitle
def go_back(driver):
    if driver.desired_capabilities['platformName'] == 'iOS':
        back_btn = get(driver, "&header-back")
        back_btn.click()
        time.sleep(1)
    else:
        buttons = get(driver, "$android.widget.Button", True)
        for button in buttons:
            if button.text == "":
                button.click()
                time.sleep(1)
                return
