from pytest_bdd import scenarios
import pytest
import time
from appium import webdriver
from shared_tests import *

# For local testing uncomment the following lines:

@pytest.fixture(scope='session', autouse=True)
def driver():
    driver = webdriver.Remote(
        command_executor='http://127.0.0.1:4723/wd/hub',
        desired_capabilities={
          'app': os.path.abspath('./android/app/build/outputs/apk/debug/app-debug.apk'),
          'platformName': 'Android',
          'deviceName': 'Pixel_2_API_30',
          'autoGrantPermissions': 'true',
          })
    time.sleep(1)
    yield driver
    try:
        driver.quit()
    except:
        pass

# # RUN ALL SCENARIOS
scenarios('features')






### TESTING WITH GENYMOTION: ###

# instructions:
"""
On M1 Mac install homebrew with the x86 emulator:
$ arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
$ arch -x86_64 /usr/local/homebrew/bin/brew install python3

Install genymotion x86:
$ arch -x86_64  /usr/local/Homebrew/opt/python@3.9/libexec/bin/pip install gmsaas

Run any command with the command line after typing this in:
$ arch -x86_64  /usr/local/Homebrew/opt/python@3.9/bin/python3.9 /usr/local/Homebrew/lib/python3.9/site-packages/gmsaas/cli/cli.py


Set Android home:
$ arch -x86_64  /usr/local/Homebrew/opt/python@3.9/bin/python3.9 /usr/local/Homebrew/lib/python3.9/site-packages/gmsaas/cli/cli.py config set android-sdk-path $ANDROID_HOME


Get the list of devices you can use:
$ arch -x86_64  /usr/local/Homebrew/opt/python@3.9/bin/python3.9 /usr/local/Homebrew/lib/python3.9/site-packages/gmsaas/cli/cli.py recipes list


Connect to a specific device:
$ arch -x86_64  /usr/local/Homebrew/opt/python@3.9/bin/python3.9 /usr/local/Homebrew/lib/python3.9/site-packages/gmsaas/cli/cli.py instances adbconnect ff9bcd94-3403-4d01-812c-59a580558ec8

Run the tests after commenting the code above and uncommenting the code below while modifying the apk you downloaded from appcenter.ms (you can also check adb devices to see where your device mapped but it's usually localhost:64146):
$ py.test tests

"""

# @pytest.fixture(scope='session', autouse=True)
# def driver():
#     driver = webdriver.Remote(
#         command_executor='http://127.0.0.1:4723/wd/hub',
#         desired_capabilities={
#           'app': os.path.abspath('/Users/laszlolm/Downloads/2021-11-27-2.apk'), # os.path.abspath('./android/app/build/outputs/apk/debug/app-debug.apk'),
#           'platformName': 'Android',
#           'deviceName': 'localhost:64146',
#           'autoGrantPermissions': 'true',
#           })
#     time.sleep(1)
#     yield driver
#     try:
#         driver.quit()
#     except:
#         pass

# # RUN ALL SCENARIOS
# scenarios('features')
