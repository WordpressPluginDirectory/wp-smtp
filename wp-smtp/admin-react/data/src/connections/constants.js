/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Default state for the store.
 */
export const DEFAULT_STATE = {
	connections: Object.values( SolidWPMail.providers ),
	availableConnections: {
		mailgun: 'Mailgun',
		sendgrid: 'SendGrid',
		brevo: 'Brevo',
		amazon_ses: 'Amazon SES',
		postmark: 'Postmark',
		other: 'Generic SMTP',
	},
	errors: [],
	texts: {
		select_provider: __(
			'Please select your email service provider',
			'LION'
		),
		smtp_host: __(
			'The SMTP host is the server address (URL or IP) provided by your email service for sending emails.',
			'LION'
		),
		smtp_port: __(
			'The SMTP port is the endpoint (commonly 25, 465, or 587) used by the SMTP server to receive outgoing emails.',
			'LION'
		),
		smtp_secure: __(
			'SMTP Secure refers to encryption protocols (SSL/TLS) used to protect email communications between the client and server.',
			'LION'
		),
		smtp_username: __(
			'The SMTP username is the identifier (usually an email address) used to authenticate with the SMTP server.',
			'LION'
		),
		smtp_password: __(
			'The SMTP password is the secret key used along with the username to authenticate and send emails through the SMTP server.',
			'LION'
		),
		from_email: __(
			'The From Email is the email address that appears as the sender in outgoing emails.',
			'LION'
		),
		from_name: __(
			'The From Name is the name that appears as the sender in outgoing emails.',
			'LION'
		),
		smtp_auth: __(
			'SMTP Auth refers to the authentication process that verifies the identity of the email sender using the SMTP username and password.',
			'LION'
		),
		is_active: __(
			'Sets whether the connection is active and operating. If set to active and saved, any other activated connection will be deactivated.',
			'LION'
		)
	},
	toasts: [],
	flags: {
		connection_saved: false,
	},
};

export const STORE_NAME = 'solidwp_mail/connections';
