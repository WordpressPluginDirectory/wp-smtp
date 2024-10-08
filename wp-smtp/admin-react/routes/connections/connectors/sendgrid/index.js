/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * SolidWP dependencies
 */
import { Text, TextSize } from '@ithemes/ui';

/**
 * Internal dependencies
 */
import { FormTextInput } from '../../../../components/form';
import { StyledSurface, StyledSurfaceHeader } from '../../../../assets/common';
import { createInterpolateElement } from '@wordpress/element';

function SendGridConnector( { model, handleInputChange, errors, texts } ) {
	return (
		<>
			<StyledSurface>
				<StyledSurfaceHeader>
					<Text weight={ 500 } as={ 'p' } size={ TextSize.LARGE }>
						{ __( 'Sender Setting', 'LION' ) }
					</Text>
					<Text>{ texts.sender_heading_text }</Text>
				</StyledSurfaceHeader>
				<FormTextInput
					label={ __( 'From email', 'LION' ) }
					name="from_email"
					type="email"
					value={ model.from_email }
					error={ errors.from_email }
					onChange={ ( value ) => {
						handleInputChange( 'from_email', value );
					} }
					help={ texts.from_email }
				/>
				<FormTextInput
					label={ __( 'From name', 'LION' ) }
					name="from_name"
					value={ model.from_name }
					error={ errors.from_name }
					onChange={ ( value ) => {
						handleInputChange( 'from_name', value );
					} }
					help={ texts.from_name }
				/>
			</StyledSurface>
			<StyledSurface>
				<StyledSurfaceHeader>
					<Text weight={ 500 } as={ 'p' } size={ TextSize.LARGE }>
						{ __( 'SMTP Settings', 'LION' ) }
					</Text>
					<Text>
						{ createInterpolateElement(
							__( 'SendGrid is a comprehensive email delivery platform offering robust APIs for sending, receiving, and tracking emails. For pricing information <pricing>visit here</pricing>. For configuration information, <help>visit here</help>.', 'LION' ),
							{
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								pricing: <a href="https://go.solidwp.com/mail-sendgrid-pricing" rel="noreferrer" target="_blank" />,
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								help: <a href="https://go.solidwp.com/mail-sendgrid-config" rel="noreferrer" target="_blank" />,
							}
						) }
					</Text>
				</StyledSurfaceHeader>

				<FormTextInput
					label={ __( 'Password', 'LION' ) }
					name="smtp_password"
					type="password"
					value={ model.smtp_password }
					error={ errors.smtp_password }
					onChange={ ( value ) => {
						handleInputChange( 'smtp_password', value );
					} }
					help={ texts.smtp_password }
				/>
			</StyledSurface>
		</>
	);
}

export default SendGridConnector;
