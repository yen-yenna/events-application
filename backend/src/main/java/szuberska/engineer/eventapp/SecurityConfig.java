package szuberska.engineer.eventapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.NegatedRequestMatcher;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
   @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
            }
        };
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/resources/**",  "/api/v1/register", "/api/v1/events").permitAll()
                .antMatchers(HttpMethod.GET, "/events","/eventType/**", "/login").permitAll()
                .antMatchers("/events/**", "/admin/**", "/eventType/**").hasRole("admin")
                .antMatchers("/api/v1/ticket/**", "api/v1/users/profile/**").hasRole("user")
                .antMatchers("/events/**", "/events", "/admin/**", "/eventType/**").hasRole("employee")
               // .antMatchers(HttpMethod.GET, "/api/v1/users/profile/**").hasRole("user")
                //.anyRequest().authenticated()
                //.antMatchers(HttpMethod.PUT,"/api/v1/users/profile/**").hasRole("user")
                .and()
                .logout().permitAll()
                .and()
                .formLogin().loginPage( "/login").and()
                .csrf().disable()
                .exceptionHandling()
                .defaultAuthenticationEntryPointFor(new HttpStatusEntryPoint(HttpStatus.NOT_FOUND),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/login")) );

    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        String password = passwordEncoder().encode("password");
        auth.inMemoryAuthentication().withUser("admin").password(password).roles("admin");
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }



}


