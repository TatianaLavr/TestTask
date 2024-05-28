describe('Valid Login', () => {
    it('should enter valid login into the "Login" field', () => {
            browser.url('https://www.saucedemo.com/');
            const validUsername = 'standard_user';
            browser.pause('2000')
        });
    });
    
    describe('Valid Password', () => {
    it('should enter valid password into the "Password" field', () => {
        const validPassword = 'secret_sauce';
        });
    });
    
    describe('Click "Login" button', () => {
    it('should redirect to the inventory page', () => {
        $('#login-button').click();
    });
    });
    
    describe('Login with empty fields', () => {
        it('should not allow login', () => {
          $('#user-name').addValue('');
          $('#password').addValue('');
          $('#login-button').click(); 
          browser.pause('2000');
          const error = $('Epic sadface: Username is required').getText();
          console.log(error);
          browser.pause('2000');
        });
      });