<?php
/**
 * @license GPL-2.0-or-later
 *
 * Modified using {@see https://github.com/BrianHenryIE/strauss}.
 */

declare(strict_types=1);

namespace SolidWP\Mail\StellarWP\Validation\Commands;

/**
 * Returning this command from ValidationRule::__invoke() tells the Validator to skip all subsequent rules.
 *
 * @since 1.1.0
 */
class SkipValidationRules
{
}
